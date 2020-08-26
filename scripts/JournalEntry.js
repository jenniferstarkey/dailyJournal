import { useJournalEntries } from "./JournalDataProvider.js"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="currentDate">${entry.date}</div>
            <div class="concept">${entry.concept}</div>
            <div class="entry">${entry.entry}</div>
            <div class="mood'>${entry.mood}<div>
            

        </section>
    `
}