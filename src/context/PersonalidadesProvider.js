import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
    getDoc,
    query,
    where,
} from 'firebase/firestore';

export const PersonalidadesContext = React.createContext();

const PersonalidadesProvider = (props) => {
    const [persons, setPerson] = useState([]);

    const fetchPersons = async () => {
        const personsAux = [];
        try {
            const querySnapshot = await getDocs(collection(db, 'Personalidades'));
            querySnapshot.forEach((doc) => {
                personsAux.push({ id: doc.id, ...doc.data() });
            });
            setPerson(personsAux);
        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };

    const findPersons = async (searchName) => {
        const personsAux = [];
        try {
            if (searchName != null) {
                const querySnapshot = await getDocs(collection(db, 'Personalidades'));
                querySnapshot.forEach((doc) => {
                    const personalidade = doc.data();
                    if (personalidade.PersonalidadeNome.includes(searchName)) {
                        personsAux.push({ id: doc.id, ...personalidade });
                    }
                });
                setPerson(personsAux);
            } else {
                fetchPersons();
            }

        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };

    useEffect(() => {
        fetchPersons();
    }, []);

    const onPersonSubmit = async (event) => {
        try {
            
            const newPersonalidade = {
                id: event.PersonalidadeNome,
                PersonalidadeCurtida: false,
                PersonalidadeNome: event.PersonalidadeNome,
                PersonalidadeDesc: event.PersonalidadeDesc,
                PersonalidadeId: event.PersonalidadeId,
                PersonalidadeImg: event.PersonalidadeImg,
                PersonalidadeUserCurtida: ''
            };

            const docRef = await addDoc(collection(db, 'Personalidades'), newPersonalidade);
            const savedPersonalidade = { id: docRef.id, ...newPersonalidade };

            setPerson([...persons, savedPersonalidade]);

            console.log('Personalidade salva com sucesso no Firestore!');
        } catch (error) {
            console.error('Erro ao salvar a personalidade no Firestore:', error);
        }
    };

    const handleSearch = (event) => {

        const searchValue = event;
        findPersons(searchValue);
    };

    return (
        <PersonalidadesContext.Provider value={{ persons: persons, onPersonSubmit: onPersonSubmit, handleSearch: handleSearch }}>
            {props.children}
        </PersonalidadesContext.Provider>
    );
};

export default PersonalidadesProvider;
