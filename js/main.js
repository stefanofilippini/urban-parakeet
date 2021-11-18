console.log('JS OK');

var app = new Vue ({
    el: "#app",
    data: {

        user: {
            name: 'Stefano',
            avatar: '_5',
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                ],
            },
        ],

        activeChat: 0,

        newMessage: '',

        research: '',

    },

    methods : {
        setChat (index) {
            this.activeChat = index
        },

        lastAccess(array) {
            let last = '';
            for (let i = 0; i < array.length; i++) {
                if (array[i].status === 'received') {
                    last = array[i].date;
                    break;
                }
            }
            return last;
        },

        lastMessage(array) {
            let last_message = array[0].text;
            return last_message;
        },

        nowDateTime() {
            const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return now;
        },

        addResponse (array) {
            //(function(){ alert("Hello"); }, 3000)
            setTimeout (() => {
                array.unshift({
                    date: this.nowDateTime(),
                    text: 'ok',
                    status: 'received'
                })
            },
                2000);
        },

        addMessage() {
            if (this.newMessage !=='') {

                //aggiunta message in messages
                this.contacts[this.activeChat].messages.unshift({
                    date: this.nowDateTime(),
                    text: this.newMessage,
                    status: 'sent'
                });

                //add response
                this.addResponse(this.contacts[this.activeChat].messages);

                //clean up
                this.newMessage='';

                //set focus
                this.$refs.messageInput.focus()
            }
        },

        nextMexPres(array, index) {
            let state = false
            let incrI = index + 1
            console.log(incrI);
            if (array[incrI] !== undefined) {
                state = array[index].status === array[incrI].status
            } else {
                state = false
            }
            console.log(state);
            return state
        },
    }
})