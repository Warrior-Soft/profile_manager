<?php

namespace frontend\controllers;
use frontend\resources\AddressFields;

class AddressController extends \yii\rest\ActiveController {

    public $modelClass = AddressFields::class;

}
