# Stories
## 1. As a FreeFlexer, I am insured for a shift
### Acceptance criteria
1. I can see the the status of my insurance 
2. I can opt out of the insurance 
3. I can see the type of insurance coverage that applies to my shift 
4. I can see a confirmation that I'm insured for the shift I'm applying to, in the shift
   overview page

The first user story is poorly written. Here are my suggestions: 

1. I can see the status of my Liability and Accident insurances on the **My insurances** page
2. I can opt out of my Liability and Accident insurances on the **My insurances** page by enabling the **Opt out** toggle
3. I can see the type of insurance coverage that applies to my shift on the **Overview of my shift** page
4. I can see a confirmation that I am insured for the shift I am applying to on the **Shift overview** page

## 2. As a FreeFlexer, I am automatically insured in case of sickness and disability
### Acceptance criteria
1. I can see I am insured in case of sickness when all shifts have been worked 
2. If less than required shifts worked, I don't see confirmation of insurance 
3. The sickness and disability insurance is not visible when I don't meet the requirements

The second user story is poorly written and has a duplicate acceptance criteria. Here are my suggestions: 

1. I can see I am insured in case of sickness and disability on the **My insurances** page when I worked more than 10 shifts
2. I can not see that I am insured in case of sickness and disability on the **My insurances** page when I worked less than 10 shifts

## 3. As a FreeFlexer, I can submit an insurance claim
### Acceptance criteria
1. I see the option to submit a claim in 'My Insurances' page 
2. The 'submit claim' button is not visible unless I have worked at least one shift 
3. I'm redirected to the insurance provider when submitting a claim 
4. When claim submitted, I get a confirmation

The third user story is poorly written and missing acceptance criteria. Here are my suggestions: 

1. I can see the **Submit a claim** button in the **Liability and Accident insurances** section on the **My Insurances** page after my first shift
2. I can't see the **Submit claim** button in the **Liability and Accident insurances** section on the **My Insurances** page unless I have worked at least one shift
3. I am redirected to the insurance provider after I click the **Submit claim** button
4. I am redirected back to Temper and I can see a confirmation in the **Liability and Accident insurances** section on the **My Insurances** page when a claim is submitted
5. I can see the email confirmation with info about my claim, and response time from my insurance when a claim is submitted
