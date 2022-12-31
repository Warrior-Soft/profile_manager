<?php

namespace frontend\controllers;
use frontend\resources\ClientFields;

class ClientController extends \yii\rest\ActiveController {

    public $modelClass = ClientFields::class;

}
