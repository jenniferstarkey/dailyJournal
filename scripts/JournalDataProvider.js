/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "08/12/2020",
        concept: "Git and Github",
        entry: "We started working on the Martin's Aquarium project and how to work with Git.",
        mood: "Excited"
    },
    {
        id: 3,
        date: "08/18/2020",
        concept: "HTML & CSS",
        entry: "We saw the Cohort 41 front end capstones today and I can't wait to start mine!",
        mood: "Inspired"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}