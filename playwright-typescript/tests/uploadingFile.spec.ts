import {test} from '@playwright/test'

test('Upload Single Files', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[name="files[]"]','./fileToUpload/playwright_1.png');
    await page.setInputFiles('input[name="files[]"]','./fileToUpload/playwright_2.png');
})

test('Upload multiple Files', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
     await page.setInputFiles('input[name="files[]"]',['./fileToUpload/playwright_1.png'
        ,'./fileToUpload/playwright_2.png']);
})
