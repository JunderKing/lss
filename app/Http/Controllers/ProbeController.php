<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models as Model;

class ProbeController extends Controller
{
    public function getProbeList (Request $request) {
        $params = $this->validation($request, [
            'searchMode' => 'required|numeric',
            'geneType' => 'required|numeric',
            'symbolStr' => 'required|string',
            'pageno' => 'required|numeric',
            'perpage' => 'required|numeric',
        ]);
        if ($params === false) {
            return $this->error(100);
        }
        extract($params);

        $symbolList = explode("\n", $symbolStr);

        $geneModel = Model\Gene::from('gene as A')
            ->join('transcript as B', 'A.id', '=', 'B.gene_id')
            ->join('probe as C', 'B.id', '=', 'C.tran_id')
            ->where('A.type', $geneType);
        if ($searchMode == 1) {
            // 按基因名称搜索
            $geneModel = $geneModel->whereIn('A.name', $symbolList);
        } else {
            // 按转录本Id搜索
            $geneModel = $geneModel->whereIn('B.name', $symbolList);
        }
        $dataCount = $geneModel->count();
        $offset = $perpage * ($pageno - 1);
        $dataList = $geneModel->offset($offset)->limit($perpage)
            ->select('A.name as geneName', 'B.name as tranName', 'donor', 'acceptor')
            ->get()->toArray();

        return $this->output([
            'dataCount' => $dataCount,
            'dataList' => $dataList,
        ]);
    }

    public function checkGeneSymbol (Request $request) {
        $params = $this->validation($request, [
            'searchMode' => 'required|numeric',
            'geneType' => 'required|numeric',
            'symbolStr' => 'required|string',
        ]);
        if ($params === false) {
            return $this->error(100);
        }
        extract($params);

        $symbolList = explode("\n", $symbolStr);
        $errList = [];
        //var_dump($symbolList);
        // 检查gene symbol是否存在
        foreach ($symbolList as $symbol) {
            if ($searchMode == 1) {
                // 按基因名称搜索
                $isExist = Model\Gene::where([['name', $symbol], ['type', $geneType]])->count();
                if (!$isExist) {
                    $errList[] = $symbol;
                }
            } else {
                // 按转录本名称搜索
                $isExist = Model\Gene::from('gene as A')
                    ->join('transcript as B', 'A.id', '=', 'B.gene_id')
                    ->where([['B.name', $symbol], ['A.type', $geneType]])->count();
                if (!$isExist) {
                    $errList[] = $symbol;
                }
            }
        }

        return $this->output([
            'symbolList' => $symbolList,
            'errList' => $errList,
        ]);
    }
}
