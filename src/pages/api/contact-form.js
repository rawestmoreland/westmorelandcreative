import SibApiV3Sdk from 'sib-api-v3-sdk'
var defaultClient = SibApiV3Sdk.ApiClient.instance

export default function handler(req, res) {
  const apiKey = defaultClient.authentications['api-key']
  apiKey.apiKey = process.env.BREVO_API_KEY

  const { firstName, lastName, business, phone, email, message } = req.body

  const apiInstanceEmail = new SibApiV3Sdk.TransactionalEmailsApi()
  const apiInstanceContact = new SibApiV3Sdk.ContactsApi()

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
  let createContact = new SibApiV3Sdk.CreateContact()

  sendSmtpEmail = {
    to: [
      {
        email: 'richard@westmorelandcreative.com',
        name: 'Richard Westmoreland',
      },
    ],
    templateId: 5,
    params: {
      firstName,
      lastName,
      business,
      email,
      phone,
      message,
    },
    headers: {
      'X-Mailin-custom':
        'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
    },
  }

  if (req.body.subscribe) {
    createContact.email = email
    createContact.listIds = [6]

    apiInstanceContact.createContact(createContact).then(
      function (data) {
        console.log(
          'API called successfully. Returned data: ' + JSON.stringify(data)
        )
      },
      function (error) {
        console.error(error)
      }
    )
  }

  apiInstanceEmail.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log('API called successfully. Returned data: ' + data)
    },
    function (error) {
      console.error(error)
    }
  )

  res.status(200).json({ msg: 'success' })
}
