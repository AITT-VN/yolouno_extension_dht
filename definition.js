Blockly.Python["uno_dhtxx_measure"] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  Blockly.Python.definitions_['init_dht_' + pin] = 'dht_' + pin + ' = dht.' + type + '(Pin(' + pin + '_PIN))';
  var code = 'dht_' + pin + ".measure()\n";
  return code;
};

Blockly.Blocks["uno_dhtxx_temp"] = {
  init: function () {
    this.jsonInit({
      message0: "nhiệt độ %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [
              "DHT11",
              "DHT11"
            ],
            [
              "DHT22",
              "DHT22"
            ]
          ],
        },
        {
          type: "field_dropdown",
          name: "PIN",
          options: digitalPins,
        },
      ],
      output: null,
      colour: "#d400d4",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["uno_dhtxx_temp"] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  Blockly.Python.definitions_['init_dht_' + pin] = 'dht_' + pin + ' = dht.' + type + '(Pin(' + pin + '_PIN))';
  var code = 'dht_' + pin + ".temperature()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["uno_dhtxx_humid"] = {
  init: function () {
    this.jsonInit({
      message0: "độ ẩm %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [
              "DHT11",
              "DHT11"
            ],
            [
              "DHT22",
              "DHT22"
            ]
          ],
        },
        {
          type: "field_dropdown",
          name: "PIN",
          options: digitalPins,
        },
      ],
      output: null,
      colour: "#d400d4",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["uno_dhtxx_humid"] = function (block) {
  var type = block.getFieldValue('TYPE');
  var pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  Blockly.Python.definitions_['init_dht_' + pin] = 'dht_' + pin + ' = dht.' + type + '(Pin(' + pin + '_PIN))';
  var code = 'dht_' + pin + ".humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
