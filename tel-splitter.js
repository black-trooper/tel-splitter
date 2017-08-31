(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.telSplitter = _index2.default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TelSplitter = function () {
  _createClass(TelSplitter, [{
    key: 'split',
    value: function split(tel, strict) {
      tel = tel.split('-').join('');
      for (var areaDigit = 5; areaDigit > 1; areaDigit--) {
        var areaCode = tel.substring(0, areaDigit);
        var cityDigit = void 0;
        if (this.landPhoneAreaCode.indexOf(areaCode) >= 0) {
          cityDigit = 6 - areaDigit;
        }
        if (!cityDigit) {
          if (strict) {
            cityDigit = this.otherPhoneStrictMap[areaCode];
          } else {
            cityDigit = this.otherPhoneMap[areaCode];
          }
        }
        if (cityDigit) {
          return [areaCode, tel.substring(areaDigit, areaDigit + cityDigit), tel.substring(areaDigit + cityDigit)];
        }
      }
      return [tel];
    }
  }, {
    key: 'format',
    value: function format(tel, strict) {
      if (!tel) {
        return tel;
      }
      return this.split(tel, strict).join('-');
    }
  }]);

  function TelSplitter() {
    _classCallCheck(this, TelSplitter);

    this.landPhoneAreaCode = ['011', '0123', '0124', '0125', '0126', '01267', '0133', '0134', '0135', '0136', '01372', '01374', '0137', '01377', '0138', '01392', '0139', '01397', '01398', '0142', '0143', '0144', '0145', '01456', '01457', '0146', '01466', '0152', '0153', '0154', '01547', '015', '0155', '01558', '0156', '01564', '0157', '0158', '01586', '01587', '0162', '01632', '01634', '01635', '0163', '0164', '01648', '0165', '01654', '01655', '01656', '01658', '0166', '0167', '0172', '0173', '0174', '0175', '0176', '017', '0178', '0179', '0182', '0183', '0184', '0185', '0186', '0187', '018', '0191', '0192', '0193', '0194', '0195', '019', '0197', '0198', '022', '0220', '0223', '0224', '0225', '0226', '0228', '0229', '0233', '0234', '0235', '023', '0237', '0238', '0240', '0241', '0242', '0243', '0244', '024', '0246', '0247', '0248', '025', '0250', '0254', '0255', '0256', '0257', '0258', '0259', '0260', '0261', '026', '0263', '0264', '0265', '0266', '0267', '0268', '0269', '0270', '027', '0274', '0276', '0277', '0278', '0279', '0280', '0282', '0283', '0284', '0285', '028', '0287', '0288', '0289', '0291', '029', '0293', '0294', '0295', '0296', '0297', '0299', '03', '0422', '042', '0428', '04', '043', '0436', '0438', '0439', '044', '045', '0460', '046', '0463', '0465', '0466', '0467', '0470', '047', '0475', '0476', '0478', '0479', '048', '0480', '049', '0493', '0494', '0495', '04992', '04994', '04996', '04998', '052', '053', '0531', '0532', '0533', '0536', '0537', '0538', '0539', '054', '0544', '0545', '0547', '0548', '0550', '0551', '055', '0553', '0554', '0555', '0556', '0557', '0558', '0561', '0562', '0563', '0564', '0565', '0566', '0567', '0568', '0569', '0572', '0573', '0574', '0575', '0576', '05769', '0577', '0578', '058', '0581', '0584', '0585', '0586', '0587', '059', '0594', '0595', '0596', '0597', '05979', '0598', '0599', '06', '072', '0721', '0725', '073', '0735', '0736', '0737', '0738', '0739', '0740', '0742', '0743', '0744', '0745', '0746', '07468', '0747', '0748', '0749', '075', '0761', '076', '0763', '0765', '0766', '0767', '0768', '0770', '0771', '0772', '0773', '0774', '077', '0776', '0778', '0779', '078', '0790', '0791', '079', '0794', '0795', '0796', '0797', '0798', '0799', '082', '0820', '0823', '0824', '0826', '0827', '0829', '083', '0833', '0834', '0835', '0836', '0837', '0838', '08387', '08388', '08396', '0845', '0846', '0847', '08477', '0848', '084', '08512', '08514', '0852', '0853', '0854', '0855', '0856', '0857', '0858', '0859', '086', '0863', '0865', '0866', '0867', '0868', '0869', '0875', '0877', '087', '0879', '0880', '0883', '0884', '0885', '088', '0887', '0889', '0892', '0893', '0894', '0895', '0896', '0897', '0898', '089', '092', '0920', '093', '0930', '0940', '0942', '0943', '0944', '0946', '0947', '0948', '0949', '09496', '0950', '0952', '0954', '0955', '0956', '0957', '095', '0959', '096', '0964', '0965', '0966', '0967', '0968', '0969', '0972', '0973', '0974', '097', '0977', '0978', '0979', '098', '0980', '09802', '0982', '0983', '0984', '0985', '0986', '0987', '09912', '09913', '099', '0993', '0994', '0995', '0996', '09969', '0997'];

    this.otherPhoneMap = {
      '020': 4, // その他
      '050': 4, // IP電話
      '070': 4, // 携帯電話/PHS
      '080': 4, // 携帯電話
      '090': 4, // 携帯電話
      '0120': 3, // その他
      '0800': 3, // その他
      '0570': 3, // その他
      '0990': 3 // その他
    };

    this.otherPhoneStrictMap = {
      '020': 3, // その他
      '050': 4, // IP電話
      '070': 3, // 携帯電話/PHS
      '080': 3, // 携帯電話
      '090': 3, // 携帯電話
      '0120': 3, // その他
      '0800': 3, // その他
      '0570': 3, // その他
      '0990': 3 // その他
    };
  }

  return TelSplitter;
}();

exports.default = new TelSplitter();

},{}]},{},[1]);
