<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    private $instance;

    public function __construct()
    {
        $this->instance = new Cart();
    }

    public function create(Request $request)
    {
        return $this->instance->create($request);
    }

    public function checkout(Request $request)
    {
        return $this->instance->checkout($request);
    }

    public function cart()
    {
        return $this->instance->cart();
    }

    public function count()
    {
        return $this->instance->count();
    }
}
