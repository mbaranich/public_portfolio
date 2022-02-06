const router = require('express').Router()
const { Router } = require('express')
const nodemailer = require('nodemailer')

router.post('/contact', (req, res) => {

    const pass = process.env.GMAIL_PASS

    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "Please complete all of the fields."})
    }
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: 'matthewbaranich@gmail.com',
                pass: pass
            }
        })

        let mailOptions = {
            from: data.email,
            to: "matthewbaranich@gmail.com",
            subject: `Message from ${data.name} via website`,
            html: `
            <h3>Information</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
            `,
        }

        smtpTransporter.sendMail(mailOptions, (error) => {
            try {
                if(error) return res.status(400).json({msg: "Please complete all of the fields."});
                res.status(200).json({msg: 'Thank you for contacting Matt!'})
            } catch (error) {
                if(error) return res.status(500).json({msg: "There is a server error"})
            }
        })
})

module.exports = router