const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const ota = require('zigbee-herdsman-converters/lib/ota');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
  fingerprint: [
      {modelID: 'TS0601', manufacturerName: '_TZE200_2gtsuokt'},
  ],
  model: 'TY-20-250-1000-W2Z2',
  vendor: 'LTECH',
  description: 'Tuya LED for Vortex by Verde Lights',
  fromZigbee: [fz.tuya_light_wz5],
  toZigbee: [tz.tuya_dimmer_state, tz.tuya_light_wz5],
  exposes: [
      exposes.light().withBrightness().setAccess('state', ea.STATE_SET).setAccess('brightness',
          ea.STATE_SET).withColorTemp([250, 454]).setAccess('color_temp',
          ea.STATE_SET),
      //exposes.numeric('white_brightness', ea.STATE_SET).withValueMin(0).withValueMax(254).withDescription(
      //    'White brightness of this light'),
  ],
  //meta: {separateWhite: true},
};

module.exports = definition;
