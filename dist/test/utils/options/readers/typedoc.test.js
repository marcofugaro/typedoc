"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const assert_1 = require("assert");
const readers_1 = require("../../../../lib/utils/options/readers");
const utils_1 = require("../../../../lib/utils");
describe('Options - TypeDocReader', () => {
    const options = new utils_1.Options(new utils_1.Logger());
    options.addDefaultDeclarations();
    options.addReader(new readers_1.TypeDocReader());
    function test(name, input, cb) {
        it(name, () => {
            options.reset();
            options.setValue('options', input).unwrap();
            options.read(new utils_1.ConsoleLogger());
            cb();
        });
    }
    test('Converts src to inputFiles', path_1.join(__dirname, 'data/src.json'), () => {
        assert_1.deepStrictEqual(options.getValue('inputFiles'), ['a']);
    });
    test('Preserves splitting behavior', path_1.join(__dirname, 'data/src2.json'), () => {
        assert_1.deepStrictEqual(options.getValue('inputFiles'), ['a']);
    });
    function testError(name, file) {
        it(name, () => {
            options.reset();
            options.setValue('options', file).unwrap();
            const logger = new utils_1.Logger();
            options.read(logger);
            assert_1.deepStrictEqual(logger.hasErrors(), true, 'No error was logged');
        });
    }
    testError('Errors if the file cannot be found', path_1.join(__dirname, 'data/non-existent-file.json'));
    testError('Errors if the data is invalid', path_1.join(__dirname, 'data/invalid.json'));
    testError('Errors if any set option errors', path_1.join(__dirname, 'data/unknown.json'));
    it('Does not error if the option file cannot be found but was not set.', () => {
        const options = new class LyingOptions extends utils_1.Options {
            isDefault() {
                return true;
            }
        }(new utils_1.Logger());
        options.addDefaultDeclarations();
        options.addReader(new readers_1.TypeDocReader());
        const logger = new utils_1.Logger();
        options.read(logger);
        assert_1.deepStrictEqual(logger.hasErrors(), false);
    });
});
//# sourceMappingURL=typedoc.test.js.map