<div class="modal fade" id="enquireModal" role="dialog">
    <div class="enquirePanel">
        <div>
            <span data-dismiss="modal" class="closebtn">
                <i class="fa fa-times"></i>
            </span>
            <h4>
                <i class="fa fa-pencil"></i>&nbsp;&nbsp;&nbsp;Enquire Now</h4>
        </div>

        <span class="enqIntro">For general enquiries contact the relevant campus.</span>

        <select id="cb_Year" class="selectAwesome" data-placeholder="Select Desired Year of Study">
        </select>

        <select id="cb_Campus" class="selectAwesome" data-placeholder="Select a Campus">
        </select>

        <select id="cb_QualificationType" class="selectAwesome" data-placeholder="Select a Qualification Type">
        </select>

        <select id="cb_Programme" class="selectAwesome" data-placeholder="Select a Programme to Study">
        </select>

        <!-- <label for="">First Name</label> -->
        <input id="txt_First_Name" placeholder="First Name" type="text" />

        <!-- <label for="">Surname</label> -->
        <input id="txt_Surname" placeholder="Surname" type="text" />

        <!-- <label for="">Email Address</label> -->
        <input id="txt_Email" placeholder="Email Address" type="text" />

        <!-- <label for="">Contact Number</label> -->
        <input id="txt_Phone" placeholder="Contact Number" type="text" />

        <!-- <label for="">ID Number</label> -->
        <input id="txt_Identity" placeholder="ID Number" type="text" />

        <!-- <label for="">Any other information you require</label> -->
        <textarea id="msg_Other_Info" placeholder="Any other information you require" type="text"></textarea>

        <input id="ck_Terms" type="checkbox" />
        <label for="ck_Terms">- I have read the
            <a style="text-decoration: underline;" onclick="javascript:openWindow();">Terms and Conditions</a>
        </label>

        <a href="" onclick="return submitLead();" class="submit_Btn">submit</a>
        <span>*SLP: Short Learning Programme</span>

        <div class="errorsEnquire" style="display: none;">
            <span>
                <span class="warningIcon">
                    <i class="fa fa-exclamation-triangle"></i>
                </span>&nbsp;&nbsp;&nbsp;There are errors with your submision: </span>
            <ul>
            </ul>
        </div>

        <div class="successTakeover" style="display: none;">
            <span data-dismiss="modal" class="closebtn">
                <i class="fa fa-times"></i>
            </span>
            <p>
                <span class="hdrSuccess">Success!</span>
                <br /> Thank you for your submission
                <br />
                <span data-dismiss="modal" class="ctaClose">close</span>
            </p>
        </div>

        <div class="failureTakeover" style="display: none;">

            <p>Unfortunately we were not able to submit your enquiry. Please try again later.</p>

        </div>


        <div class="loadingTakeover" style="display: none;">
            <p>Submiting...</p>
        </div>

    </div>


</div>