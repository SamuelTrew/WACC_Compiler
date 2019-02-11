.PHONY: all install build build-grammar build-src test clean

all: install build

install:
	npm install

build:
	npm run build

test:
	npm test

clean:
	npm run clean