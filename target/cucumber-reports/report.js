$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feaure : List of screario"
    },
    {
      "line": 2,
      "value": "# Screario : Bussiness rule through list of steps with arguments"
    },
    {
      "line": 3,
      "value": "# Given : Some precondition steps"
    },
    {
      "line": 4,
      "value": "# When : Some key action"
    },
    {
      "line": 5,
      "value": "# Then : To observe outcome or validation"
    },
    {
      "line": 6,
      "value": "# Screnario Outline : List of steps for data-driven as an Example and \u003cPlaceholder\u003e"
    }
  ],
  "line": 9,
  "name": "Register application",
  "description": "",
  "id": "register-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 8,
      "name": "@Register"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Register screen display",
  "description": "",
  "id": "register-application;register-screen-display",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Open Finhay application",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "## And I click skip in popup"
    }
  ],
  "line": 13,
  "name": "I Click button Skips",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click button Dang Ky",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Verify button Dang ky bang Google display",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify Dang ky bang so dien thoai  display",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.open_Finhay_application()"
});
formatter.result({
  "duration": 320907409,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Skips()"
});
formatter.result({
  "duration": 1796172738,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Dang_Ky()"
});
formatter.result({
  "duration": 823159509,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Dang_ky_bang_Google_display()"
});
formatter.result({
  "duration": 804712557,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Dang_ky_bang_so_dien_thoai_display()"
});
formatter.result({
  "duration": 33499737,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CLick button Register by Phone",
  "description": "",
  "id": "register-application;click-button-register-by-phone",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I click button Dang ky bang so dien thoai",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Veriry Tiep Tuc button undisplay",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Dang_ky_bang_so_dien_thoai()"
});
formatter.result({
  "duration": 81512613,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.veriry_Tiep_Tuc_button_undisplay()"
});
formatter.result({
  "duration": 26204,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Only input Last name",
  "description": "",
  "id": "register-application;only-input-last-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@param_with_mark"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I Click Lastname textbox",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I input Lastname \"Nguyen\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click button return in keyboard",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Tiep tuc button disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_Lastname_textbox()"
});
formatter.result({
  "duration": 876750336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nguyen",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_Lastname(String)"
});
formatter.result({
  "duration": 1560316096,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_return_in_keyboard()"
});
formatter.result({
  "duration": 1533978315,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Tiep_tuc_button_disable()"
});
formatter.result({
  "duration": 19960,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Only input First name",
  "description": "",
  "id": "register-application;only-input-first-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I Click Firstname textbox",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I input first name \"Oanh\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click Lastname textbox",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I input lastname is \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify Tiep tuc button disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_Firstname_textbox()"
});
formatter.result({
  "duration": 737602517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oanh",
      "offset": 20
    }
  ],
  "location": "RegisterDefinition.i_input_first_name(String)"
});
formatter.result({
  "duration": 1349443821,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_Lastname_textbox()"
});
formatter.result({
  "duration": 1604791149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_lastname_is(String)"
});
formatter.result({
  "duration": 849278863,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Tiep_tuc_button_disable()"
});
formatter.result({
  "duration": 31859,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Only input First name and Lastname least 2 char",
  "description": "",
  "id": "register-application;only-input-first-name-and-lastname-least-2-char",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I input first name \"O\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I input lastname is \"N\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "O",
      "offset": 20
    }
  ],
  "location": "RegisterDefinition.i_input_first_name(String)"
});
formatter.result({
  "duration": 1705832813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_lastname_is(String)"
});
formatter.result({
  "duration": 1852568841,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Input correct LastName and FirstName",
  "description": "",
  "id": "register-application;input-correct-lastname-and-firstname",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I input last name \"Nguyen\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I input firstname \"Oanh\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Click button return in keyboard",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify button Tiep tuc steps one enable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nguyen",
      "offset": 19
    }
  ],
  "location": "RegisterDefinition.i_input_last_name(String)"
});
formatter.result({
  "duration": 2260823524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oanh",
      "offset": 19
    }
  ],
  "location": "RegisterDefinition.i_input_firstname(String)"
});
formatter.result({
  "duration": 1452450047,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_return_in_keyboard()"
});
formatter.result({
  "duration": 1170278103,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Tiep_tuc_steps_one_enable()"
});
formatter.result({
  "duration": 20003,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Click button Continue steps one",
  "description": "",
  "id": "register-application;click-button-continue-steps-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I click button Continue steps one",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Verify button Continue step two disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Continue_steps_one()"
});
formatter.result({
  "duration": 123013553,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Continue_step_two_disable()"
});
formatter.result({
  "duration": 540115174,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "No input email",
  "description": "",
  "id": "register-application;no-input-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenario({
  "line": 51,
  "name": "Register unsucess with param",
  "description": "",
  "id": "register-application;register-unsucess-with-param",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I input to Phone \"0987747474\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Verify Tiep tuc button disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0987747474",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Phone(String)"
});
formatter.result({
  "duration": 1196474247,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Tiep_tuc_button_disable()"
});
formatter.result({
  "duration": 14571,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "No input phone",
  "description": "",
  "id": "register-application;no-input-phone",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I input to Email \"oanh.nguyen2@finhay.com.vn\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Verify Tiep tuc button disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "oanh.nguyen2@finhay.com.vn",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Email(String)"
});
formatter.result({
  "duration": 1804691039,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Tiep_tuc_button_disable()"
});
formatter.result({
  "duration": 11810,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Input phone no enough 10",
  "description": "",
  "id": "register-application;input-phone-no-enough-10",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "I input to Phone \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I input to Email \"oanh.nguyen2@finhay.com.vn\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Verify Tiep tuc button disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Phone(String)"
});
formatter.result({
  "duration": 1168603130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oanh.nguyen2@finhay.com.vn",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Email(String)"
});
formatter.result({
  "duration": 1096130450,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Tiep_tuc_button_disable()"
});
formatter.result({
  "duration": 12509,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Input email wrong format",
  "description": "",
  "id": "register-application;input-email-wrong-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "I input to Phone \"0975447447\"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I input to Email \"oanh.nguyen\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click button Continue in step two",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Verify error message \"Email sai định dạng\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Verify icon Error display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0975447447",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Phone(String)"
});
formatter.result({
  "duration": 1675699534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oanh.nguyen",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Email(String)"
});
formatter.result({
  "duration": 1420843466,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Continue_in_step_two()"
});
formatter.result({
  "duration": 1141739512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email sai định dạng",
      "offset": 22
    }
  ],
  "location": "RegisterDefinition.verify_error_message(String)"
});
formatter.result({
  "duration": 27329468,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_icon_Error_display()"
});
formatter.result({
  "duration": 22419506,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Check register duplicate Phone number",
  "description": "",
  "id": "register-application;check-register-duplicate-phone-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "I input to Phone \"0912364485\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "Verify error message Phone display \"Số điện thoại đã tồn tại trong hệ thống\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0912364485",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Phone(String)"
});
formatter.result({
  "duration": 697175287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Số điện thoại đã tồn tại trong hệ thống",
      "offset": 36
    }
  ],
  "location": "RegisterDefinition.verify_error_message_Phone_display(String)"
});
formatter.result({
  "duration": 784142912,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Check wrong fomat phone",
  "description": "",
  "id": "register-application;check-wrong-fomat-phone",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 76,
  "name": "I input to Phone \"1122334455\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Verify error message Phone \"SĐT không đúng định dạng\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1122334455",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Phone(String)"
});
formatter.result({
  "duration": 1100395966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SĐT không đúng định dạng",
      "offset": 28
    }
  ],
  "location": "RegisterDefinition.verify_error_message_Phone(String)"
});
formatter.result({
  "duration": 605023191,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Check input phone enough 10 number and Email",
  "description": "",
  "id": "register-application;check-input-phone-enough-10-number-and-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "I input to Phone correct",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "I input to Email correct",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click button Continue in step two",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Verify display text Minimum of 8 characters",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Verify display text There is 1 capital letter",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Verify display text MThere is 1 special character",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Verify display text There is 1 lower case letter",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_input_to_Phone_correct()"
});
formatter.result({
  "duration": 1210051397,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_input_to_Email_correct()"
});
formatter.result({
  "duration": 1477741067,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Continue_in_step_two()"
});
formatter.result({
  "duration": 552140675,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 44751631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 31
    }
  ],
  "location": "RegisterDefinition.verify_display_text_Minimum_of_characters(int)"
});
formatter.result({
  "duration": 25781586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "RegisterDefinition.verify_display_text_There_is_capital_letter(int)"
});
formatter.result({
  "duration": 513137536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "RegisterDefinition.verify_display_text_MThere_is_special_character(int)"
});
formatter.result({
  "duration": 22640040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "RegisterDefinition.verify_display_text_There_is_lower_case_letter(int)"
});
formatter.result({
  "duration": 24880242,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "No input password",
  "description": "",
  "id": "register-application;no-input-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "I no input password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_no_input_password(String)"
});
formatter.result({
  "duration": 648202765,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 652220008,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 533662828,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 500851241,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "No input confirm password",
  "description": "",
  "id": "register-application;no-input-confirm-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 97,
  "name": "I no input confirm password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "RegisterDefinition.i_no_input_confirm_password(String)"
});
formatter.result({
  "duration": 554922789,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 1138230864,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 61220938,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 504769004,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "No input confirm password and password",
  "description": "",
  "id": "register-application;no-input-confirm-password-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 103,
  "name": "I no input password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "I no input confirm password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_no_input_password(String)"
});
formatter.result({
  "duration": 646555760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "RegisterDefinition.i_no_input_confirm_password(String)"
});
formatter.result({
  "duration": 1553202255,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 711221322,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 481704238,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 497820357,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Uncheck terms of use",
  "description": "",
  "id": "register-application;uncheck-terms-of-use",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "I input to password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 69624952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1562293408,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 570383745,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 494627242,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Uncheck commitment",
  "description": "",
  "id": "register-application;uncheck-commitment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 116,
  "name": "I input to password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 64827888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1564008420,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 569315148,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 501663693,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Verify password have format ........",
  "description": "",
  "id": "register-application;verify-password-have-format-........",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "I input to password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Verify password textbox display \"•••••••••••\"",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "Verify confirm password textbox display \"•••••••••••\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 647045619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1082334459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "•••••••••••",
      "offset": 33
    }
  ],
  "location": "RegisterDefinition.verify_password_textbox_display(String)"
});
formatter.result({
  "duration": 514956353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "•••••••••••",
      "offset": 41
    }
  ],
  "location": "RegisterDefinition.verify_confirm_password_textbox_display(String)"
});
formatter.result({
  "duration": 25857241,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Verify password show when click show",
  "description": "",
  "id": "register-application;verify-password-show-when-click-show",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 128,
  "name": "I input to password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I Click button Show password",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I Click button Show confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Verify password textbox show \"O@nhkim3010\"",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "Verify confirm password textbox show \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 651059324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1567852226,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Show_password()"
});
formatter.result({
  "duration": 609259880,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Show_confirm_password()"
});
formatter.result({
  "duration": 1241723704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 30
    }
  ],
  "location": "RegisterDefinition.verify_password_textbox_show(String)"
});
formatter.result({
  "duration": 29741006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 38
    }
  ],
  "location": "RegisterDefinition.verify_confirm_password_textbox_show(String)"
});
formatter.result({
  "duration": 28903811,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 136,
  "name": "I input to password \"Oanh\"",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "I  input confirm password \"Oanh\"",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Oanh",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 658275150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oanh",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1558618454,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 614452522,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 490016165,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 496746788,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 143,
  "name": "I input to password \"O@nh\"",
  "keyword": "When "
});
formatter.step({
  "line": 144,
  "name": "I  input confirm password \"O@nh\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nh",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 55201465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nh",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1606014244,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 561698431,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 1009132489,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 28417458,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 150,
  "name": "I input to password \"oanh\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "I  input confirm password \"oanh\"",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "oanh",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 645995226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oanh",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1556573741,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 607298542,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 480936504,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 501696716,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 157,
  "name": "I input to password \"oanh1\"",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "I  input confirm password \"oanh1\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "oanh1",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 654422095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oanh1",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1561786123,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 556506541,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 548030013,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 491611482,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 164,
  "name": "I input to password\"oanh1@\"",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "I  input confirm password \"oanh1@\"",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "oanh1@",
      "offset": 20
    }
  ],
  "location": "RegisterDefinition.i_input_Password(String)"
});
formatter.result({
  "duration": 54797057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oanh1@",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1570994363,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 544299042,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 552321639,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 503596338,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 171,
  "name": "I input to password \"@#$%^\u0026*\"",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "I  input confirm password \"@#$%^\u0026*\"",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 648478500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1571369869,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 564551466,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 536699959,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 492264399,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 178,
  "name": "I input to password \"@#$%^\u0026*\"",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I  input confirm password \"@#$%^\u0026*\"",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 65088631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1561977494,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 548642417,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 1038099750,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 25436777,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 185,
  "name": "I input to password\"@#$%^\u0026*oanh\"",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "I  input confirm password \"@#$%^\u0026*oanh\"",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*oanh",
      "offset": 20
    }
  ],
  "location": "RegisterDefinition.i_input_Password(String)"
});
formatter.result({
  "duration": 52827275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*oanh",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1569325113,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 548348085,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 543331336,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 495104897,
  "status": "passed"
});
formatter.scenario({
  "line": 191,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 192,
  "name": "I input to password\"@#$%^\u0026*OANH\"",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "I  input confirm password \"@#$%^\u0026*OANH\"",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*OANH",
      "offset": 20
    }
  ],
  "location": "RegisterDefinition.i_input_Password(String)"
});
formatter.result({
  "duration": 63348751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026*OANH",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1572511702,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 557269324,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 537599960,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 500643528,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "Verify when input invalidate password",
  "description": "",
  "id": "register-application;verify-when-input-invalidate-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 199,
  "name": "I input to password \"OANHKIM\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "I  input confirm password \"OANHKIM\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "Verify button Complete Register disable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OANHKIM",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 67498323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OANHKIM",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1542605356,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 550896777,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 532187207,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Complete_Register_disable()"
});
formatter.result({
  "duration": 497468907,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "Verify when input confirm password not the same as the password",
  "description": "",
  "id": "register-application;verify-when-input-confirm-password-not-the-same-as-the-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 206,
  "name": "I input to password \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "I  input confirm password \"Oanhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I click button Completed Register",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "verify error message wrong confirm password\"Mật khẩu không trùng khớp\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 21
    }
  ],
  "location": "RegisterDefinition.i_input_to_password(String)"
});
formatter.result({
  "duration": 645242397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oanhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1554847904,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 1034478525,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 550112129,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Completed_Register()"
});
formatter.result({
  "duration": 650139603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mật khẩu không trùng khớp",
      "offset": 44
    }
  ],
  "location": "RegisterDefinition.verify_error_message_wrong_confirm_password(String)"
});
formatter.result({
  "duration": 28120824,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "Check when click terms of use",
  "description": "",
  "id": "register-application;check-when-click-terms-of-use",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 214,
  "name": "I click link terms of use",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "Verify file pdf display",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "Click button back out terms of use",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_click_link_terms_of_use()"
});
formatter.result({
  "duration": 70106526,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_file_pdf_display()"
});
formatter.result({
  "duration": 757080328,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.click_button_back_out_terms_of_use()"
});
formatter.result({
  "duration": 171812011,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "Check register successful",
  "description": "",
  "id": "register-application;check-register-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 219,
  "name": "I  input to password again \"O@nhkim3010\"",
  "keyword": "When "
});
formatter.step({
  "line": 220,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I click button Completed Register",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "Verify button Active now display",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "Verify button Skip display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 28
    }
  ],
  "location": "RegisterDefinition.i_input_to_password_again(String)"
});
formatter.result({
  "duration": 1801777526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1162955982,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Completed_Register()"
});
formatter.result({
  "duration": 607757769,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Active_now_display()"
});
formatter.result({
  "duration": 1415578535,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Skip_display()"
});
formatter.result({
  "duration": 16546054,
  "status": "passed"
});
formatter.scenario({
  "line": 225,
  "name": "Verify when Click button Skip",
  "description": "",
  "id": "register-application;verify-when-click-button-skip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 226,
  "name": "I Click button Skip",
  "keyword": "When "
});
formatter.step({
  "line": 227,
  "name": "Verify button OK, I will validate the OTP display",
  "keyword": "Then "
});
formatter.step({
  "line": 228,
  "name": "I still want to skip this step display",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Skip()"
});
formatter.result({
  "duration": 57301908,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_OK_I_will_validate_the_OTP_display()"
});
formatter.result({
  "duration": 815969120,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_still_want_to_skip_this_step_display()"
});
formatter.result({
  "duration": 21643049,
  "status": "passed"
});
formatter.scenario({
  "line": 230,
  "name": "Verify When click confirm Skip",
  "description": "",
  "id": "register-application;verify-when-click-confirm-skip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 231,
  "name": "I Click button confirm skip",
  "keyword": "When "
});
formatter.step({
  "line": 232,
  "name": "Verify button Discover Now display",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_confirm_skip()"
});
formatter.result({
  "duration": 70246260,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Discover_Now_display()"
});
formatter.result({
  "duration": 773726339,
  "status": "passed"
});
formatter.scenario({
  "line": 234,
  "name": "Verify when click button Discover Now",
  "description": "",
  "id": "register-application;verify-when-click-button-discover-now",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 235,
  "name": "I Click button Discover Now",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "Verify avatar display",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Discover_Now()"
});
formatter.result({
  "duration": 64561122,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_avatar_display()"
});
formatter.result({
  "duration": 2776550062,
  "status": "passed"
});
formatter.scenario({
  "line": 238,
  "name": "Check when click button logout",
  "description": "",
  "id": "register-application;check-when-click-button-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 239,
  "name": "I Click to Avatar",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I Click button Logout",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I Click button OK",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_to_Avatar()"
});
formatter.result({
  "duration": 84120488,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Logout()"
});
formatter.result({
  "duration": 10684793857,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_OK()"
});
formatter.result({
  "duration": 721771449,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "Verify when click Active",
  "description": "",
  "id": "register-application;verify-when-click-active",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 244,
  "name": "When I click button Dang Ky",
  "keyword": "Given "
});
formatter.step({
  "line": 245,
  "name": "I click button Dang ky bang so dien thoai",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I input last name \"Nguyen\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I input firstname \"Oanh\"",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I Click button return in keyboard",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I click button Continue steps one",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "I input to Phone correct",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I input to Email \"test2@finhay.com.vn\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I click button Continue in step two",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I  input to password again \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I selected checkbox terms of use",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I selected checkbox commitment",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I click button Completed Register",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "Verify error message duplicate mail display \"Email đã được sử dụng\"",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "I Click button ok in popup",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I Click Back in steps 3",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I input to Email correct",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I click button Continue in step two",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I  input to password again \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I  input confirm password \"O@nhkim3010\"",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I click button Completed Register",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I click Active now",
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "Verify Phone registed display",
  "keyword": "Then "
});
formatter.step({
  "line": 268,
  "name": "Verify button get the activation code display",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "Verify button I had code",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.when_I_click_button_Dang_Ky()"
});
formatter.result({
  "duration": 1797168443,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Dang_ky_bang_so_dien_thoai()"
});
formatter.result({
  "duration": 611853404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nguyen",
      "offset": 19
    }
  ],
  "location": "RegisterDefinition.i_input_last_name(String)"
});
formatter.result({
  "duration": 1443284239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oanh",
      "offset": 19
    }
  ],
  "location": "RegisterDefinition.i_input_firstname(String)"
});
formatter.result({
  "duration": 1691103557,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_return_in_keyboard()"
});
formatter.result({
  "duration": 555964870,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Continue_steps_one()"
});
formatter.result({
  "duration": 108859441,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_input_to_Phone_correct()"
});
formatter.result({
  "duration": 1680603248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test2@finhay.com.vn",
      "offset": 18
    }
  ],
  "location": "RegisterDefinition.i_input_to_Email(String)"
});
formatter.result({
  "duration": 1344428989,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Continue_in_step_two()"
});
formatter.result({
  "duration": 601639360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 28
    }
  ],
  "location": "RegisterDefinition.i_input_to_password_again(String)"
});
formatter.result({
  "duration": 1153927781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1564380673,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_terms_of_use()"
});
formatter.result({
  "duration": 541484126,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_selected_checkbox_commitment()"
});
formatter.result({
  "duration": 536186556,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Completed_Register()"
});
formatter.result({
  "duration": 536841142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email đã được sử dụng",
      "offset": 45
    }
  ],
  "location": "RegisterDefinition.verify_error_message_duplicate_mail_display(String)"
});
formatter.result({
  "duration": 816290263,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_ok_in_popup()"
});
formatter.result({
  "duration": 69597843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "RegisterDefinition.i_Click_Back_in_steps(int)"
});
formatter.result({
  "duration": 609172402,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_input_to_Email_correct()"
});
formatter.result({
  "duration": 690956737,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Continue_in_step_two()"
});
formatter.result({
  "duration": 550569835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 28
    }
  ],
  "location": "RegisterDefinition.i_input_to_password_again(String)"
});
formatter.result({
  "duration": 643366260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "O@nhkim3010",
      "offset": 27
    }
  ],
  "location": "RegisterDefinition.i_input_confirm_password(String)"
});
formatter.result({
  "duration": 1151638922,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Completed_Register()"
});
formatter.result({
  "duration": 548459226,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_Active_now()"
});
formatter.result({
  "duration": 975162400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_Phone_registed_display()"
});
formatter.result({
  "duration": 706249353,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_get_the_activation_code_display()"
});
formatter.result({
  "duration": 18368233,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_I_had_code()"
});
formatter.result({
  "duration": 19986890,
  "status": "passed"
});
formatter.scenario({
  "line": 271,
  "name": "Click button Get the activation",
  "description": "",
  "id": "register-application;click-button-get-the-activation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 272,
  "name": "I click button Get the activation",
  "keyword": "When "
});
formatter.step({
  "line": 273,
  "name": "Verify content code display",
  "keyword": "Then "
});
formatter.step({
  "line": 274,
  "name": "I click icon Close",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "Verify button Get active code",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I click button Get the activation",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Get_the_activation()"
});
formatter.result({
  "duration": 58918900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_content_code_display()"
});
formatter.result({
  "duration": 714262624,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_icon_Close()"
});
formatter.result({
  "duration": 71944026,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Get_active_code()"
});
formatter.result({
  "duration": 515847515,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_button_Get_the_activation()"
});
formatter.result({
  "duration": 730265469,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "Click button Agree get Active",
  "description": "",
  "id": "register-application;click-button-agree-get-active",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 279,
  "name": "I Click button Agree",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I Click button OK",
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "Verify textbox input pincode display",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Agree()"
});
formatter.result({
  "duration": 70956511,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_OK()"
});
formatter.result({
  "duration": 999259952,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_textbox_input_pincode_display()"
});
formatter.result({
  "duration": 1864691401,
  "status": "passed"
});
formatter.scenario({
  "line": 283,
  "name": "Check when input pincode least six number",
  "description": "",
  "id": "register-application;check-when-input-pincode-least-six-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 284,
  "name": "I click in texbox pincode",
  "keyword": "When "
});
formatter.step({
  "line": 285,
  "name": "I input pincode \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I click Active when input code",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "Verify message input pincode least six number \"Vui lòng nhập mã OTP\"",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "I Click button OK when input pincode least six number",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_click_in_texbox_pincode()"
});
formatter.result({
  "duration": 996918166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 17
    }
  ],
  "location": "RegisterDefinition.i_input_pincode(String)"
});
formatter.result({
  "duration": 1020615701,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_Active_when_input_code()"
});
formatter.result({
  "duration": 4240214318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập mã OTP",
      "offset": 47
    }
  ],
  "location": "RegisterDefinition.verify_message_input_pincode_least_six_number(String)"
});
formatter.result({
  "duration": 694363689,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_OK_when_input_pincode_least_six_number()"
});
formatter.result({
  "duration": 91536430,
  "status": "passed"
});
formatter.scenario({
  "line": 290,
  "name": "Check when input wrong pincode",
  "description": "",
  "id": "register-application;check-when-input-wrong-pincode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 291,
  "name": "I click in texbox pincode",
  "keyword": "When "
});
formatter.step({
  "line": 292,
  "name": "I input pincode \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I click Active when input code",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "Verify message when input wrong pincode \"Mã xác nhận không hợp lệ, mã là chuỗi 6 chữ số. Vui lòng thử lại.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 295,
  "name": "I Click button OK when input wrong pincode",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_click_in_texbox_pincode()"
});
formatter.result({
  "duration": 1014102119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "RegisterDefinition.i_input_pincode(String)"
});
formatter.result({
  "duration": 1973306505,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_Active_when_input_code()"
});
formatter.result({
  "duration": 4232838732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mã xác nhận không hợp lệ, mã là chuỗi 6 chữ số. Vui lòng thử lại.",
      "offset": 41
    }
  ],
  "location": "RegisterDefinition.verify_message_when_input_wrong_pincode(String)"
});
formatter.result({
  "duration": 810239848,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_OK_when_input_wrong_pincode()"
});
formatter.result({
  "duration": 68352814,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 297,
      "value": "##Scenario: Verify when Click button Resend via SMS"
    },
    {
      "line": 298,
      "value": "## When  I Click button Resend via SMS display"
    },
    {
      "line": 299,
      "value": "##Then Verify message Resend via SMS display \"Mã xác nhận đã được gửi cho bạn qua tin nhắn hoặc cuộc gọi. Nếu không nhận được mã bạn có thể tạm BỎ QUA bước này và có thể xác thực lại vào lúc khác.\""
    },
    {
      "line": 300,
      "value": "##And I Click button OK resend via SMS"
    },
    {
      "line": 301,
      "value": "##And Button resend via SMS disable"
    },
    {
      "line": 302,
      "value": "##And Button Resend via Phone number enable"
    },
    {
      "line": 305,
      "value": "##  Scenario: Verify when Click button Resend via Phone number"
    },
    {
      "line": 306,
      "value": "##  When  I Click button Resend via Phone number display"
    },
    {
      "line": 307,
      "value": "##  Then Verify message Resend via Phone number display \"Hãy nghe điện thoại và ghi nhớ mã OTP\""
    },
    {
      "line": 308,
      "value": "##  And I Click button OK Resend via Phone number"
    },
    {
      "line": 309,
      "value": "##  And Display countdown time"
    }
  ],
  "line": 311,
  "name": "Check when input correct OTP",
  "description": "",
  "id": "register-application;check-when-input-correct-otp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 312,
  "name": "I click in texbox pincode",
  "keyword": "When "
});
formatter.step({
  "line": 313,
  "name": "I input pincode \"000000\"",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click Active when input code",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "Verify button Discover Now display",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "I Click button Discover Now",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_click_in_texbox_pincode()"
});
formatter.result({
  "duration": 919494786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000000",
      "offset": 17
    }
  ],
  "location": "RegisterDefinition.i_input_pincode(String)"
});
formatter.result({
  "duration": 1967463442,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_click_Active_when_input_code()"
});
formatter.result({
  "duration": 4213021996,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.verify_button_Discover_Now_display()"
});
formatter.result({
  "duration": 920385536,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Discover_Now()"
});
formatter.result({
  "duration": 94665884,
  "status": "passed"
});
formatter.scenario({
  "line": 319,
  "name": "Check when click button logout",
  "description": "",
  "id": "register-application;check-when-click-button-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 320,
  "name": "I Click to Avatar",
  "keyword": "When "
});
formatter.step({
  "line": 321,
  "name": "I Click button Logout",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I Click button OK",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterDefinition.i_Click_to_Avatar()"
});
formatter.result({
  "duration": 2336644235,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Logout()"
});
formatter.result({
  "duration": 10618152657,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_OK()"
});
formatter.result({
  "duration": 718185919,
  "status": "passed"
});
formatter.scenario({
  "line": 324,
  "name": "Verify when  Register by Gooogle",
  "description": "",
  "id": "register-application;verify-when--register-by-gooogle",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 325,
  "name": "When I click button Dang Ky",
  "keyword": "Given "
});
formatter.step({
  "line": 326,
  "name": "I Click button Register By google",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "Show webview choosing acc google",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterDefinition.when_I_click_button_Dang_Ky()"
});
formatter.result({
  "duration": 1593134123,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.i_Click_button_Register_By_google()"
});
formatter.result({
  "duration": 687244074,
  "status": "passed"
});
formatter.match({
  "location": "RegisterDefinition.show_webview_choosing_acc_google()"
});
formatter.result({
  "duration": 1947481871,
  "status": "passed"
});
});