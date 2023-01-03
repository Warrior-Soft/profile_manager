<?php

namespace frontend\controllers;
use frontend\resources\ClientFields;
use Yii;
use yii\filters\Cors;

class ClientController extends \yii\rest\ActiveController {

    public $modelClass = ClientFields::class;

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
        $clients = ClientFields::find()->all();
        return $this->asJson($clients);
    }

    public function actionGetbyid($id)
    {
        $client = ClientFields::find()->where(['id' => $id])->one();
        //$client = ClientFields::find($id);
        return $this->asJson($client);
    }

    public function actionPost()
    {
        $request = Yii::$app->request->post();

        $client=new ClientFields();
        $client->first_name=$request['first_name'];
        $client->last_name=$request['last_name'];
        $client->phone=$request['phone'];
        $client->email=$request['email'];
        $client->sex=$request['sex'];
        $client->birthday=$request['birthday'];
        $client->save();

        return $this->asJson($client);
    }

    public function actionPut($id)
    {
        $request = Yii::$app->request->post();

        $client = ClientFields::find()->where(['id' => $id])->one();
        $client->first_name=$request['first_name'];
        $client->last_name=$request['last_name'];
        $client->phone=$request['phone'];
        $client->email=$request['email'];
        $client->sex=$request['sex'];
        $client->birthday=$request['birthday'];
        $client->save();

        return $this->asJson($client);
    }

    public function actionDelete($id)
    {
        $client = ClientFields::find()->where(['id' => $id])->one();
        $client->delete();

        return $this->asJson($client);
    }
}
