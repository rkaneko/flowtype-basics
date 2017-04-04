/*  */

(true);
(false);
("blahblah");  // Error
(undefined);  // Error
(null);  // Error
(0);  // Error

function reverse(flag) {
  return !flag;
}

reverse(true);
reverse(false);
reverse("text");  // Error
reverse(0);  // Error
reverse(Boolean(0));
