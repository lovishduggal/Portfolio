import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast from 'react-hot-toast';
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            from_name: name,
            from_email: email,
            from_subject: subject,
            message,
        };

        // emailjs
        //     .send(
        //         'service_si2bavh',
        //         'template_pc9shoq',
        //         data,
        //         'hmep9d6y_TJPblmt5'
        //     )
        //     .then(() => {
        //         toast.success('The Email has sent successfully');
        //     })
        //     .catch(() => {
        //         toast.error(
        //             'There is an error sending the email, please try again'
        //         );
        //     });
        toast.promise(
            emailjs.send(
                'service_si2bavh',
                'template_pc9shoq',
                data,
                'hmep9d6y_TJPblmt5'
            ),
            {
                loading: 'Sending...',
                success: 'The Email has sent successfully',
                error: 'There is an error sending the email, please try again',
            }
        );
        console.log(name, email, subject, message);
    };
    return (
        <div className="max-w-7xl mx-auto my-16  p-4" id="">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold text-center">Contact</h2>
                <p className="text-center">
                    Feel free to reach out to me for any questions.
                </p>
                <div className="flex items-center justify-center">
                    <div className="w-[400px] sm:w-[500px]">
                        <h3 className="text-3xl font-medium">Email Us</h3>
                        <form
                            className="card-body p-6 border rounded-xl textarea-bordered"
                            onSubmit={handleSubmit}>
                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered"
                                    required
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                />
                            </div>
                            <textarea
                                className="textarea textarea-bordered resize-none text-base"
                                required
                                placeholder="Message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}></textarea>

                            <div className="form-control mt-6 ">
                                <button className="btn btn-primary">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
