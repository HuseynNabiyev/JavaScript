describe('Product Page Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500'); // Adjust port based on your local server
    });

    it('displays the product name correctly', () => {
        cy.get('#product-name').should('have.text', 'Sample Product');
    });

    it('shows the product image', () => {
        cy.get('#product-image').should('be.visible');
    });

    it('displays the product description', () => {
        cy.get('#product-description').should('contain.text', 'This is a sample product.');
    });

    it('shows the correct price', () => {
        cy.get('#product-price').should('have.text', '$19.99');
    });

    it('adds to cart with default quantity', () => {
        cy.get('#add-to-cart').click();
        cy.get('#message').should('have.text', 'Added 1 item(s) to cart!');
    });

    it('adds to cart with custom quantity', () => {
        cy.get('#quantity').clear().type('3');
        cy.get('#add-to-cart').click();
        cy.get('#message').should('have.text', 'Added 3 item(s) to cart!');
    });

    it('shows error for invalid quantity', () => {
        cy.get('#quantity').clear().type('0');
        cy.get('#add-to-cart').click();
        cy.get('#message').should('have.text', 'Quantity must be at least 1.');
    });
});