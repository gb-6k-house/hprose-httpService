#测试目录
TESTS = tests/*
REPORTER = spec
TIMEOUT = 10000
JSCOVERAGE = ./node_modules/.bin/istanbul
MOCHA =  ./node_modules/.bin/mocha
#执行测试用例
test:
	@NODE_ENV=test $(MOCHA) -R $(REPORTER) -t $(TIMEOUT) $(TESTS)

#测试用例覆盖率, 注意测试完之后的测试数据被清除
test-cov: lib-cov
	@LIB_COV=1 $(MAKE) clean
lib-cov:
	@rm -rf ./coverage
	@$(JSCOVERAGE) cover _mocha $(TESTS)
clean:
	@rm -f coverage.html
	@rm -rf ./coverage
start:
	@pm2 start ./bin/HttpStartBoot -i 1
stop:
	@pm2 stop ./bin/HttpStartBoot

.PHONY: test test-cov lib-cov
