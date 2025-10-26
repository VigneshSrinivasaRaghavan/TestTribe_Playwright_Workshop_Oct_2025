import {test} from '@playwright/test'

test('Upload Single Files', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
})

test('Upload multiple Files', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
})