/* jshint esversion: 6 */

/**
 * Nextcloud - reddit
 *
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2020
 */

import Vue from 'vue'
import './bootstrap.js'
import PersonalSettings from './components/PersonalSettings.vue'

// eslint-disable-next-line
'use strict'

// eslint-disable-next-line
new Vue({
	el: '#reddit_prefs',
	render: h => h(PersonalSettings),
})
