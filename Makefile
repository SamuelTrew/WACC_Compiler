.PHONY: all install build build-grammar build-src test clean

all: install build test clean

install:
	npm install

build: build-grammar build-src

build-grammar:
	npm run build:grammar

build-src:
	npm run build:compile

test:
	npm test

clean:
	npm run clean