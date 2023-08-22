#!/usr/bin/env node

/**
 * Copyright (c) Appblocks. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { Command } = require('commander')
const addTest = require('../subcommands/addTest')

const program = new Command()

program.option('-in,--inside <blocks...>', 'inside which block?', []).action(addTest)

program.parse(process.argv)
