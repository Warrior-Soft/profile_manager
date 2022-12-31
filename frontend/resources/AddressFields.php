<?php

namespace frontend\resources;

use \common\models\Address;

class AddressFields extends Address
{
    public function fields()
    {
        return [
            'id','client_id', 'house_number', 'street_number', 'street_name', 'municipality', 'province', 'country','client'
        ];
    }
}
