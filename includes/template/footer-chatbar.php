
<div id="ChatBar" class="ChatBar">
    <div class="bar">
        <div class="CallChat">
            <div class="wrapper">
                <p class="CallMeFooterText">Need more info? We'll contact you! </p>
                <button id="btn_CallMeBack">
                    <i class="fa fa-phone "></i>call me back</button>
            </div>
        </div>
        <div class="call-me" style="overflow: hidden; display: none;">
            <div class="region region-footer">
                <input id="txt_CallBackName" type="text" placeholder="Name:" />
                <input id="txt_CallBackMobile" type="text" placeholder="Contact Number:" />
                <select name="ctl00$cb_CallBackCampus" id="cb_CallBackCampus" class="selectAwesome">
                    <option selected="selected" value="0">Please select a campus</option>
                    <option value="1">VC Durban North</option>
                    <option value="2">VC Westville</option>
                    <option value="3">VC Pietermaritzburg</option>
                    <option value="4">VC Cape Town</option>
                    <option value="5">VC Port Elizabeth</option>
                    <option value="6">VC Waterfall - Midrand</option>
                    <option value="7">VC Pretoria</option>
                    <option value="8">VC Sandton</option>

                </select>

                <a href="#" onclick="return SubmitCallMeBack();" class="submitBtn">Submit</a>

            </div>
        </div>
    </div>
</div>