"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showRuleDialog = showRuleDialog;

var _actionType = require("./action-type.js");

/* eslint-disable */
function showRuleDialog(v) {
  console.log('showRuleDialog');

  return {
    type: _actionType.SHOW_RULE_DIALOG,
    payload: {
      isVisible: v
    }
  };
}