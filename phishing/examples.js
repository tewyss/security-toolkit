const EXAMPLES = {
  phishing: `Delivered-To: jan.novak@seznam.cz
Authentication-Results: mx2.seznam.cz;
       spf=softfail (domain of transitioning security@paypa1-support.com does not designate 203.0.113.77 as permitted sender) smtp.mailfrom=security@paypa1-support.com;
       dkim=none;
       dmarc=fail (p=NONE) header.from=paypa1-support.com
Received: from mx2.seznam.cz (mx2.seznam.cz [77.75.76.48])
       by mail.seznam.cz with ESMTPS id 4F2k9x
       for <jan.novak@seznam.cz>; Tue, 22 Sep 2026 09:14:07 +0200
Received: from vps-4471.cheap-hosting.example (unknown [203.0.113.77])
       by mx2.seznam.cz with ESMTP id a81f
       for <jan.novak@seznam.cz>; Tue, 22 Sep 2026 09:13:58 +0200
Received: from localhost (localhost [127.0.0.1])
       by vps-4471.cheap-hosting.example (Postfix) with SMTP id 91C2;
       Tue, 22 Sep 2026 07:13:51 +0000
Return-Path: <bounce-7731@mailer.cheap-hosting.example>
From: "PayPal Service" <security@paypa1-support.com>
Reply-To: paypal.resolution.center@gmail.com
To: jan.novak@seznam.cz
Subject: =?UTF-8?Q?Urgent:_Your_account_has_been_suspended_=E2=80=93_verify_now?=
Date: Tue, 22 Sep 2026 07:13:51 +0000
Message-ID: <20260922071351.91C2@vps-4471.cheap-hosting.example>
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="b1"

--b1
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<p>Dear customer,</p>
<p>We noticed unusual activity and your account has been limited.
Please confirm your identity within 24 hours:</p>
<p><a href=3D"http://203.0.113.77/paypal/login.php">https://www.paypal.com/signin</a></p>
<p><a href=3D"https://bit.ly/3xYzPay">Resolve now</a></p>
<p><a href=3D"https://www.paypal.com/cz/webapps/mpp/ua/privacy-full">Privacy</a></p>
--b1
Content-Type: application/zip; name="Invoice_2026-09.pdf.zip"
Content-Disposition: attachment; filename="Invoice_2026-09.pdf.zip"
Content-Transfer-Encoding: base64

UEsDBBQAAAAIAA==
--b1--
`,

  legit: `Delivered-To: jan.novak@seznam.cz
Authentication-Results: mx1.seznam.cz;
       spf=pass (domain of noreply@github.com designates 192.0.2.24 as permitted sender) smtp.mailfrom=noreply@github.com;
       dkim=pass header.d=github.com header.s=pf2023;
       dmarc=pass (p=REJECT) header.from=github.com
Received: from out-24.smtp.github.com (out-24.smtp.github.com [192.0.2.24])
       by mx1.seznam.cz with ESMTPS id 7c1d
       for <jan.novak@seznam.cz>; Mon, 21 Sep 2026 18:02:11 +0200
Received: from github.com (hubbernetes-node-3e1f.github.net [10.52.14.33])
       by smtp.github.com (Postfix) with ESMTPA id 4B6D1
       for <jan.novak@seznam.cz>; Mon, 21 Sep 2026 09:02:09 -0700 (PDT)
Return-Path: <noreply@github.com>
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=github.com; s=pf2023; h=Date:From:To:Subject; bh=abc; b=def
From: GitHub <noreply@github.com>
To: jan.novak@seznam.cz
Subject: [GitHub] A new SSH key was added to your account
Date: Mon, 21 Sep 2026 09:02:09 -0700
Message-ID: <sshkey-4b6d1@github.com>
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8

Hey tewyss!

A new public SSH key was added to your account.

If you believe this key was added in error, you can remove it at
https://github.com/settings/keys
`,
};
