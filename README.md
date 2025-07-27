# PlayrightWithJavascript

# npx playwright show-trace test-results\Tracing-Home-page-test-chromium\trace.zip --trace

# npx playwright test Tracing.spec.js --project=chromium --headed
# npx playwright test Tracing.spec.js --project=chromium (headless mode)

# npx playwright test Tags.spec.js --project=chromium --headed --grep sanity --tags
# npx playwright test Tags.spec.js --project=chromium --headed --grep @reg@sanity
# npx playwright test Tags.spec.js --project=chromium --headed --grep sanity --grep-invert reg (only sanity not reg)

# npx playwright test Reportes.spec.js --project=chromium --headed --reporter=list
# npx playwright test Reportes.spec.js --project=chromium --headed --reporter=line
# npx playwright test Reportes.spec.js --project=chromium --headed --reporter=dot
# npx playwright test Reportes.spec.js --project=chromium --headed --reporter=json
# npx playwright test Reportes.spec.js --project=chromium --headed --reporter=junit
# npx playwright test Reportes.spec.js --project=chromium --headed --reporter=allure-playwright


# npx playwright test Retries.spec.js --project=chromium --headed --retries=1 (retries)