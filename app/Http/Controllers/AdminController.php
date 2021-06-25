<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    private $instance;

    public function __construct()
    {
        $this->instance = new Admin();
    }

    public function prodRead($filter)
    {
        return $this->instance->prodRead($filter);
    }

    public function prodCreate(Request $request)
    {
        return $this->instance->prodCreate($request);
    }
}
