<?php

namespace frontend\controllers;
use frontend\resources\AddressFields;
use Yii;
use yii\filters\Cors;

class AddressController extends \yii\rest\ActiveController {

    public $modelClass = AddressFields::class;

    public function behaviors()
    {
        return [
            'corsFilter' => [
                'class' => Cors::class,
            ],
        ];
    }


    public function actionGetall()
    {
        $addresses = AddressFields::find()->all();
        return $this->asJson($addresses);
    }
    
    public function actionGetbyid($id)
    {
        $address = AddressFields::find()->where(['id' => $id])->one();
        return $this->asJson($address);
    }

    public function actionGetallbyclient($id)
    {
        $addresses = AddressFields::find()->where(['client_id' => $id])->all();
        return $this->asJson($addresses);
    }

    public function actionGetbyclient($id)
    {
        $address = AddressFields::find()->where(['client_id' => $id])->one();
        return $this->asJson($address);
    }

    public function actionPost()
    {
        $request = Yii::$app->request->post();

        $address=new AddressFields();
        $address->client_id=$request['client_id'];
        $address->house_number=$request['house_number'];
        $address->street_number=$request['street_number'];
        $address->street_name=$request['street_name'];
        $address->municipality=$request['municipality'];
        $address->province=$request['province'];
        $address->country=$request['country'];
        $address->save();

        return $this->asJson($address);
    }

    public function actionPut($id)
    {
        $request = Yii::$app->request->post();

        $address = AddressFields::find()->where(['id' => $id])->one();
        $address->house_number=$request['house_number'];
        $address->street_number=$request['street_number'];
        $address->street_name=$request['street_name'];
        $address->municipality=$request['municipality'];
        $address->province=$request['province'];
        $address->country=$request['country'];
        $address->save();

        return $this->asJson($address);
    }

    public function actionDelete($id)
    {
        $address = AddressFields::find()->where(['id' => $id])->one();
        $address->delete();

        return $this->asJson($address);
    }

}
