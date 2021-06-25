<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Mail\Transmit;
use App\Models\User;
use Auth;
use Mail;

class Authenticate {

    public function attempt($request, $mode)
    {
        $user = User::where($mode, $request['account'])->where('password', $request['password'])->get();

        if (count($user) > 0) {
            $user[0]->user_type == 'user' ? session(['uclient' => $user[0]]) : session(['aclient' => $user[0]]);

            return [
                'msg'=> 'user',
                'status'=> 200
            ];
        } else {
            return [
                'msg'=> '!user',
                'status'=> 200
            ];
        }
    }

    public function tpAttempt($request, $mode)
    {
        $user = User::where($mode, $request['account'])->get();

        if (count($user) > 0) {
            $user[0]->user_type == 'user' ? session(['uclient' => $user[0]]) : session(['aclient' => $user[0]]);

            return [
                'msg'=> 'user',
                'status'=> 200
            ];
        } else {
            return [
                'msg'=> '!user',
                'status'=> 200
            ];
        }
    }

    public function suAttempt($request, $mode)
    {
        if ($request['pace'] == 1) {
            $user = User::where($mode, $request['account'])->get();
            $code = substr(str_shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"), -5);

            if (count($user) == 0) {
                if ($mode == 'email') {
                    $data = [
                        'subject'=>'Account Confirmation',
                        'view'=>'mail.auth',
                        'code'=>$code
                    ];
            
                    Mail::to($request['account'])->send(new Transmit($data));

                    
                    return [
                        'msg'=> 'success',
                        'code'=>$code
                    ];
                } else {
                    return [
                        'msg'=> 'success',
                        'code'=>$code
                    ];
                    
                }
            } else {
                return [
                    'msg'=> 'user'
                ];

            }
        } else {
            $newUser = User::insertGetId([
                'email'=> $request['account'],
                'password'=> $request['password'],
                'user_type'=> 'user',
                'created_at'=> date('Y-m-d H:i:s')
            ]);

            $user = User::where('id', $newUser)->get();
            $user[0]->user_type == 'user' ? session(['uclient' => $user[0]]) : session(['aclient' => $user[0]]);
            
            return [
                'msg'=> 'success',
                'status'=> 200
            ];
        }


    }

    public function suTpAttempt($request, $mode)
    {
        $user = User::where($mode, $request['account'])->get();

        if (count($user) > 0) {
            $user[0]->user_type == 'user' ? session(['uclient' => $user[0]]) : session(['aclient' => $user[0]]);

            return [
                'msg'=> 'user',
                'status'=> 200
            ];
        } else {
            $newUser = User::insertGetId([
                'email'=> $request['account'],
                'password'=> 'Cartacar-123',
                'user_type'=> 'user',
                'created_at'=> date('Y-m-d H:i:s')
            ]);

            $user = User::where('id', $newUser)->get();
            $user[0]->user_type == 'user' ? session(['uclient' => $user[0]]) : session(['aclient' => $user[0]]);
            
            return [
                'msg'=> '!user',
                'status'=> 200
            ];
        }
    }

    // public function smsTransmit($num, $msg){
    //     $ch = curl_init();
    //     $itexmo = array('1' => $num, '2' => $msg, '3' => 'PR-AKTUS396566_1UJ92','passwd' => ']k%bs53@(v', '6' => 'POFSIS');
    //     curl_setopt($ch, CURLOPT_URL, 'https://www.itexmo.com/php_api/api.php');
    //     curl_setopt($ch, CURLOPT_POST, 1);
    //     curl_setopt($ch, CURLOPT_POSTFIELDS,
    //     http_build_query($itexmo));
    //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //     return curl_exec ($ch);
    // }
}