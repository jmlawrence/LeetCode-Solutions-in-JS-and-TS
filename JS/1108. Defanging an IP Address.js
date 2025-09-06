// 1108. Defanging an IP Address
// Problem: Given a valid (IPv4) IP address, return a defanged version of that IP address.
// Approach: Replace all '.' with '[.]' using string replace.
// Time: O(n), Space: O(n)

var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};
