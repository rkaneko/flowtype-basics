/* @flow */

// Optional object properties
({foo: 'bar'}: {foo?: string});
({foo: undefined}: {foo?: string});
({}: {foo?: string});
({foo: null}: {foo?: string});  // Error
