/* @flow */

('blahblah': string);
('true': string);
('': string);
const text1: string = undefined;  // Error
const text2: string = 1;  // Error
const text3: string = true;  // Error
const text4: string = {};  // Error
'' + String(false);
'' + JSON.stringify({});
