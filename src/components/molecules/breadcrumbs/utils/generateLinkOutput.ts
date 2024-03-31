export function generateLinkOutput(
    input: string,
): { href: string; label: string }[] {
    const parts = input.split('/').filter(Boolean);

    const output = parts.reduce(
        (result: { href: string; label: string }[], part) => {
            const href =
                result.length > 0
                    ? `${result[result.length - 1].href}/${part}`
                    : `/${part}`;
            const label = part.replace(/-/g, ' ');
            result.push({href, label});
            return result;
        },
        [],
    );
    output.unshift({href: '/', label: 'Home'});

    return output;
}
