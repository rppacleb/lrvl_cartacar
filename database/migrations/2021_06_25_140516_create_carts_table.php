<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('tbl_cart');
        Schema::create('tbl_cart', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->index();
            $table->integer('product_id')->index();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('image_link')->nullable();
            $table->decimal('amount', 10, 2)->nullable();
            $table->integer('quantity')->index();
            $table->integer('is_checkout')->index();
            $table->integer('active')->index();
            $table->dateTimeTz('created_at',6);
            $table->dateTimeTz('updated_at',6)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
