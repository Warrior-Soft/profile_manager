<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "{{%address}}".
 *
 * @property int $id
 * @property int|null $client_id
 * @property int|null $house_number
 * @property string|null $street_name
 * @property int|null $street_number
 * @property string|null $municipality
 * @property string|null $province
 * @property string|null $country
 *
 * @property Client $client
 */
class Address extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%address}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['client_id', 'house_number', 'street_number'], 'integer'],
            [['street_name', 'municipality', 'province', 'country'], 'string', 'max' => 155],
            [['client_id'], 'exist', 'skipOnError' => true, 'targetClass' => Client::class, 'targetAttribute' => ['client_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'client_id' => 'Client ID',
            'house_number' => 'House Number',
            'street_name' => 'Street Name',
            'street_number' => 'Street Number',
            'municipality' => 'Municipality',
            'province' => 'Province',
            'country' => 'Country',
        ];
    }

    /**
     * Gets query for [[Client]].
     *
     * @return \yii\db\ActiveQuery|\common\models\query\ClientQuery
     */
    public function getClient()
    {
        return $this->hasOne(Client::class, ['id' => 'client_id']);
    }

    /**
     * {@inheritdoc}
     * @return \common\models\query\AddressQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new \common\models\query\AddressQuery(get_called_class());
    }
}
