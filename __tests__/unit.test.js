// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2 

// isPhoneNumber
test('isPhoneNumber("423-995-3882") is true', () => {
    expect(functions.isPhoneNumber("423-995-3882")).toBe(true);
})
test('isPhoneNumber("894-3333-4323") is true', () => {
    expect(functions.isPhoneNumber("894-3333-4323")).toBe(true);
})
test('isPhoneNumber("894-938-343") is false', () => {
    expect(functions.isPhoneNumber("894-938-343")).toBe(false);
})
test('isPhoneNumber("894-93a18-343") is false', () => {
    expect(functions.isPhoneNumber("894-93a18-343")).toBe(false);
})


// isEmail
test('isEmail("anValidEmail@gmail.com") is true', () => {
    expect(functions.isEmail("anValidEmail@gmail.com")).toBe(true);
})
test('isEmail("anothervalidemail@hotmail.net") is true', () => {
    expect(functions.isEmail("anothervalidemail@hotmail.net")).toBe(true);
})
test('isEmail("invalidemail@nodomain") is false', () => {
    expect(functions.isEmail("invalidemail@nodomain")).toBe(false);
})
test('isEmail("bad") is false', () => {
    expect(functions.isEmail("bad")).toBe(false);
})



// isStrongPassword
test('isStrongPassword("aStrongPassword") is true', () => {
    expect(functions.isStrongPassword("aStrongPassword")).toBe(true);
})
test('isStrongPassword("anotherStrong123_") is true', () => {
    expect(functions.isStrongPassword("anStrong123_")).toBe(true);
})
test('isStrongPassword("bad") is false', () => {
    expect(functions.isStrongPassword("bad")).toBe(false);
})
test('isStrongPassword("1badone") is false', () => {
    expect(functions.isStrongPassword("1badone")).toBe(false);
})



// isDate
test('isDate("1/2/2022") is true', () => {
    expect(functions.isDate("1/2/2022")).toBe(true);
})
test('isDate("01/2/1999") is true', () => {
    expect(functions.isDate("01/2/1999")).toBe(true);
})
test('isDate("01/02/99") is false', () => {
    expect(functions.isDate("01/02/99")).toBe(false);
})
test('isDate("feb 13") is false', () => {
    expect(functions.isDate("feb 13")).toBe(false);
})



// isHexColor
test('isHexColor("#a6b784") is true', () => {
    expect(functions.isHexColor("#a6b784")).toBe(true);
})
test('isHexColor("#39f") is true', () => {
    expect(functions.isHexColor("#39f")).toBe(true);
})
test('isHexColor("39x") is false', () => {
    expect(functions.isHexColor("39x")).toBe(false);
})
test('isHexColor("somethingVeryBad") is false', () => {
    expect(functions.isHexColor("somethingVeryBad")).toBe(false);
})