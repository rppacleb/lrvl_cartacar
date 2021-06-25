<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    private $instance;

    public function __construct()
    {
        $this->instance = new Transaction();
    }

    public function transactions(Request $request)
    {
        return $this->instance->transactions($request);
    }

    public function statUpdate(Request $request)
    {
        return $this->instance->statUpdate($request);
    }
}
