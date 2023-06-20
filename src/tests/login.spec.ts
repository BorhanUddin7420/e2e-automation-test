import { expect, test } from "../fixtures/base.fixture";
import ENV from "../utils/env"


test.describe('Customer login for the nopCommerce public store @FE_Login_003 @smoke', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(ENV.BASE_URL);
    });



 })

