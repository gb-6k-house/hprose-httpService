#测试目录
TESTS = tests/*
REPORTER = spec
TIMEOUT = 10000
JSCOVERAGE = istanbul

#执行测试用例
test:
	@NODE_ENV=test mocha -R $(REPORTER) -t $(TIMEOUT) $(TESTS)

#测试用例覆盖率, 注意测试完之后的测试数据被清除
test-cov: lib-cov
	@LIB_COV=1 $(MAKE) clean
lib-cov:
	@rm -rf ./coverage
	@$(JSCOVERAGE) cover _mocha $(TESTS)
clean:
	@rm -f coverage.html
	@rm -rf ./coverage

.PHONY: test test-cov lib-cov
