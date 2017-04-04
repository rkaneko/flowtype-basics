/* @flow */

(true: boolean);
(false: boolean);
("blahblah": boolean);  // Error
(undefined: boolean);  // Error
(null: boolean);  // Error
(0: boolean);  // Error

function reverse(flag: boolean): boolean {
  return !flag;
}

reverse(true);
reverse(false);
reverse("text");  // Error
reverse(0);  // Error
reverse(Boolean(0));
