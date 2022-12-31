<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%address}}`.
 */
class m221231_131051_create_address_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%address}}', [
            'id' => $this->primaryKey(),
            'client_id' => $this->integer(),
            'house_number' => $this->integer(),
            'street_name' => $this->string('155'),
            'street_number' => $this->integer(),
            'municipality' => $this->string('155'),
            'province' => $this->string('155'),
            'country' => $this->string('155')

        ]);

        $this->addForeignKey(
            'fk-address-client_id',
            'address',
            'client_id',
            'client',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%address}}');
    }
}
