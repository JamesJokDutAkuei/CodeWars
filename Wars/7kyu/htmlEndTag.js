function autoCompleteTag(startTag) {
    // Regular expression to extract the tag name from the start tag
    const match = startTag.match(/^<(\w+)/);
    
    if (match) {
        // Extracted tag name
        const tagName = match[1];
        // Constructing the corresponding end tag
        return `</${tagName}>`;
    } else {
        // Return an empty string or error if the start tag is invalid
        return "";
    }
}

