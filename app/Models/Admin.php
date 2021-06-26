<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Products;
use Storage;

class Admin {

    public function prodCreate($request)
    {
        $awsUrl = 'https://s3.' . config('app.aws_region') . '.amazonaws.com/' . config('app.aws_bucket');
        $imgUrl = 'cartacar/product/logo/'.time().date('YmdHis');
        $logoName =  $request['logo']->getClientOriginalName();
        Storage::disk('s3')->put($imgUrl, file_get_contents($request['logo']));

        Products::insertGetId([
            'name'=>$request['name'],
            'description'=>$request['description'],
            'amount'=>$request['amount'],
            'image_link'=>$awsUrl.'/'.$imgUrl,
            'created_at'=>date('Y-m-d H:i:s')
        ]);

        return [
            'msg'=>'success'
        ];
    }

    public function prodUpdate($request)
    {
        // return $request;
        if ($request['logo'] != 'default') {
            $awsUrl = 'https://s3.' . config('app.aws_region') . '.amazonaws.com/' . config('app.aws_bucket');
            $imgUrl = 'cartacar/product/logo/'.time().date('YmdHis');
            $logoName =  $request['logo']->getClientOriginalName();
            Storage::disk('s3')->put($imgUrl, file_get_contents($request['logo']));
            $imageLink = $awsUrl.'/'.$imgUrl;
        } else {
            $imageLink = $request['current'];
        }

        Products::where('id', $request['id'])->update([
            'name'=>$request['name'],
            'description'=>$request['description'],
            'amount'=>$request['amount'],
            'image_link'=>$imageLink,
            'updated_at'=>date('Y-m-d H:i:s')
        ]);

        return [
            'msg'=>'success'
        ];
    }

    public function prodRead($filter)
    {
        if ($filter == 'all') {
            return Products::get(['id', 'name', 'amount', 'description', 'image_link']);
        } else {
            return Products::where('id', $filter)->get(['id', 'name', 'amount', 'description', 'image_link']);
        }
    }
}