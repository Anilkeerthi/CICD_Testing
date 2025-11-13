/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/cicd/cicdtest/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
