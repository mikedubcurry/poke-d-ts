module.exports = {
	transform: { "^.+\\.ts?$": "ts-jest" },
	testEnvironment: "node",
	testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
	moduleFileExtensions: ["ts", "js", "json", "node"],
	globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  }
}
